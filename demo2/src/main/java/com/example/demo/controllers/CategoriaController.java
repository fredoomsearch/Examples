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

import com.example.demo.entities.Categoria;

import com.example.demo.helpers.Helpers;
import com.example.demo.models.Response;
import com.example.demo.repositories.CategoriaRepository;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/categorias")
@CrossOrigin


public class CategoriaController {

     @Autowired
    private CategoriaRepository categoriarepository;

    @Autowired
    private Helpers helpers;

    @GetMapping()
    public ResponseEntity<?> listadeCategorias() {
        Map<String, Object> response = new HashMap<>();

        try {
            List<Categoria> categorias= categoriarepository.findAll();

            // con este response se ahorra el rsto QUE SERIAN LAS 3 LINEAS DE RESPONSE DE
            // ABAJO

            response = helpers.apiResponse(new Response<>(true, "lista de categorias", categorias));
            return new ResponseEntity<>(response, HttpStatus.OK);

        } catch (DataAccessException e) {
            return helpers.catchError(e, "Error al consultar todas las categorias: ");
        }

    }

    @GetMapping("/{id}")
    public ResponseEntity<?> listarCategoria(@PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();
        try {
            Categoria categoria = categoriarepository.findById(id).orElse(null);
            // con este response se ahorra el rsto QUE SERIAN LAS 3 LINEAS DE RESPONSE DE
            // ABAJO
            if (categoria == null) {
                response = helpers.apiResponse(new Response<>(true, "lista de categorias", ""));

                return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
            }

            response = helpers.apiResponse(new Response<>(true, "categoria encontrada", categoria));
            return new ResponseEntity<>(response, HttpStatus.OK);

        } catch (DataAccessException e) {
            return helpers.catchError(e, "Error al consultar por id de la categoria: ");
        }
    }



       @PostMapping()
    public ResponseEntity<?> guardarCategoria(@Valid @RequestBody Categoria categoria, BindingResult result) {
        Map<String, Object> response = new HashMap<>();
        if (result.hasErrors()) {
            return helpers.validarCampos(result);
        }
        try {
            categoriarepository.save(categoria);
            response = helpers.apiResponse(new Response<>(true, "categoria guardada", categoria));
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        } catch (DataAccessException e) {
            return helpers.catchError(e, "Error al guardar categoria");
        }
    }


    @PutMapping("/{id}")
    public ResponseEntity<?> actualizarCategoria(@Valid @RequestBody Categoria categoria, BindingResult result,
            @PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();
        try {
            Categoria CategoriaEncontrada = categoriarepository.findById(id).orElse(null);

            // con este response se ahorra el resto QUE SERIAN LAS 3 LINEAS DE RESPONSE DE
            // ABAJO
            if (CategoriaEncontrada == null) {
                response = helpers.apiResponse(new Response<>(false, "lista de categorias", ""));
                return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
            }

            CategoriaEncontrada.setCultura(categoria.getCultura());
            CategoriaEncontrada.setNombre(categoria.getNombre());
            CategoriaEncontrada.setTipo(categoria.getTipo());
            

            
            // Save the updated computadorEncontrado
            categoriarepository.save(CategoriaEncontrada);

            response = helpers.apiResponse(new Response<>(false, "categoria actualizada", ""));
            return new ResponseEntity<>(response, HttpStatus.OK);

        } catch (DataAccessException e) {
            return helpers.catchError(e, "Error al actualizar categoria: ");
        }
    }

    @DeleteMapping({ "/{id}" })
    public ResponseEntity<?> eliminarCategoria(@PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();
        try {
            Categoria categoria = categoriarepository.findById(id).orElse(null);
            // con este response se ahorra el rsto QUE SERIAN LAS 3 LINEAS DE RESPONSE DE
            // ABAJO
            if (categoria== null) {
                response = helpers.apiResponse(new Response<>(false, "lista de categorias", ""));

                return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
            }

           categoriarepository.delete(categoria);

            response = helpers.apiResponse(new Response<>(false, "categoria eliminada", ""));
            return new ResponseEntity<>(response, HttpStatus.OK);

        } catch (DataAccessException e) {
            return helpers.catchError(e, "Error al eliminar categoria");
        }

    }
}

    

