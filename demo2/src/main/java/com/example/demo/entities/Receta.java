package com.example.demo.entities;



import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "recetas")

public class Receta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "El campo nombre de plato es obligatorio")
    @Column(name = "nombrePlato")
    private String nombrePlato;
    @NotNull(message = "El campo image Url es obligatorio")
    @Column(name = "imgUrl")
    private String imgUrl;

    @NotNull(message = "El campo video url es obligatorio")
    @Column(name = "videoUrl")
    private String videoUrl;

    @NotNull(message = "El campo cultura es obligatorio")
    @Column(name = "cultura")
    private String cultura;


  @NotNull(message = "El campo categoria es obligatorio")
  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "categoria_id", referencedColumnName = "id")
  @JsonProperty(access = Access.WRITE_ONLY)
  private Categoria categoria;
 
}


    

