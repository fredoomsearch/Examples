package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Receta;

public interface RecetaRepository extends JpaRepository<Receta, Long> {

	  List<Receta> findByNombrePlatoContains(String nombre);
	
    
}
