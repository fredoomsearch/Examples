package com.example.demo.entities;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "categoria")

public class Categoria {

  
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  
  @NotNull(message = "El campo nombre es obligatorio")
  @Column(name = "nombre")
  private String nombre;
  
  @Size(min = 4, max = 10)
  @Column(name = "tipo")
  private String tipo;
  
  @NotNull(message = "El campo cultura es obligatorio")
  @Column(name = "cultura", unique = true)
  private String cultura;

  @OneToMany(mappedBy = "categoria")
  @JsonProperty(access = Access.READ_WRITE)
  private List<Receta> recetas;
  
  public Categoria(Long id) {
    this.id= id;
  }
  @OneToOne
   @JoinColumn(name = "categoria_id", referencedColumnName = "id", nullable =
   true, unique = true)
   @JsonProperty(access = Access.READ_WRITE)
   private Categoria categoria;

}
