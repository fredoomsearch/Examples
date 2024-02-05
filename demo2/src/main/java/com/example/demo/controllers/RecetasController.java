package com.example.demo.controllers;


import java.util.HashMap;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Receta;
import com.example.demo.helpers.Helpers;
import com.example.demo.models.Response;
import com.example.demo.repositories.RecetaRepository;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/recetas")
@CrossOrigin

public class RecetasController {
      @Autowired
    private RecetaRepository recetarepository;

    @Autowired
    private Helpers helpers;

    @GetMapping()
    public ResponseEntity<?> listadeRecetas() {
        Map<String, Object> response = new HashMap<>();

        try {
            List<Receta> recetas = recetarepository.findAll();

            // con este response se ahorra el rsto QUE SERIAN LAS 3 LINEAS DE RESPONSE DE
            // ABAJO

            response = helpers.apiResponse(new Response<>(true, "lista de recetas", recetas));
            return new ResponseEntity<>(response, HttpStatus.OK);

        } catch (DataAccessException e) {
            return helpers.catchError(e, "Error al consultar todas las recetas: ");
        }

    }

   @GetMapping("/{id}")
    public ResponseEntity<?> listarReceta(@PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();
        try {
            Receta receta = recetarepository.findById(id).orElse(null);
            // con este response se ahorra el rsto QUE SERIAN LAS 3 LINEAS DE RESPONSE DE
            // ABAJO
            if (receta == null) {
                response = helpers.apiResponse(new Response<>(false, "lista de recetas", ""));

                return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
            }

            response = helpers.apiResponse(new Response<>(true, "receta encontrada", receta));
            return new ResponseEntity<>(response, HttpStatus.OK);

        } catch (DataAccessException e) {
            return helpers.catchError(e, "Error al consultar por id de receta: ");
        }
    }


 @GetMapping("/nombre/{nombre}")
    public ResponseEntity<?> listarPais(@PathVariable String nombre) {
        Map<String, Object> response = new HashMap<>();
        try {
            List<Receta> receta = recetarepository.findByNombrePlatoContains(nombre);
            // con este response se ahorra el rsto QUE SERIAN LAS 3 LINEAS DE RESPONSE DE
            // ABAJO
            if (receta == null) {
                response = helpers.apiResponse(new Response<>(false, "lista de recetas", ""));

                return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
            }

            response = helpers.apiResponse(new Response<>(true, "receta encontrada", receta));
            return new ResponseEntity<>(response, HttpStatus.OK);

        } catch (DataAccessException e) {
            return helpers.catchError(e, "Error al consultar por id de receta: ");
        }
    }


    @PostMapping()
    public ResponseEntity<?> guardarEmpleado(@Valid @RequestBody Receta receta, BindingResult result) {
        Map<String, Object> response = new HashMap<>();
        if (result.hasErrors()) {
            return helpers.validarCampos(result);
        }
        try {
            recetarepository.save(receta);
            response = helpers.apiResponse(new Response<>(true, "receta guardada", receta));
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        } catch (DataAccessException e) {
            return helpers.catchError(e, "Error al guardar la receta");
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> actualizarPais(@Valid @RequestBody Receta receta, BindingResult result,
            @PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();
        try {
            Receta RecetaEncontrada = recetarepository.findById(id).orElse(null);

            // con este response se ahorra el resto QUE SERIAN LAS 3 LINEAS DE RESPONSE DE
            // ABAJO
            if (RecetaEncontrada == null) {
                response = helpers.apiResponse(new Response<>(false, "lista de recetas", ""));
                return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
            }

            RecetaEncontrada.setNombrePlato(receta.getNombrePlato());
             RecetaEncontrada.setImgUrl(receta.getImgUrl());
             RecetaEncontrada.setVideoUrl(receta.getVideoUrl());

            // Save the updated computadorEncontrado
            recetarepository.save(RecetaEncontrada);

            response = helpers.apiResponse(new Response<>(false, "receta actualizado", ""));
            return new ResponseEntity<>(response, HttpStatus.OK);

        } catch (DataAccessException e) {
            return helpers.catchError(e, "Error al actualizar la receta: ");
        }
    }

    @DeleteMapping({ "/{id}" })
    public ResponseEntity<?> eliminarComputador(@PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();
        try {
            Receta receta = recetarepository.findById(id).orElse(null);
            // con este response se ahorra el rsto QUE SERIAN LAS 3 LINEAS DE RESPONSE DE
            // ABAJO
            if (receta == null) {
                response = helpers.apiResponse(new Response<>(false, "lista de recetas", ""));

                return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
            }

            recetarepository.delete(receta);

            response = helpers.apiResponse(new Response<>(false, "receta eliminada", ""));
            return new ResponseEntity<>(response, HttpStatus.OK);

        } catch (DataAccessException e) {
            return helpers.catchError(e, "Error al eliminar la receta");
        }

    }
}