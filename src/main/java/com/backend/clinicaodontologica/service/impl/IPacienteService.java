package com.backend.clinicaodontologica.service.impl;

import com.backend.clinicaodontologica.dto.entrada.paciente.PacienteEntradaDto;
import com.backend.clinicaodontologica.dto.salida.paciente.PacienteSalidaDto;
import com.backend.clinicaodontologica.model.Paciente;

import java.util.List;

public interface IPacienteService {
    PacienteSalidaDto registrarPaciente(PacienteEntradaDto paciente);

    List<PacienteSalidaDto> listarPacientes();
    PacienteSalidaDto buscarPacientePorId(int id);

    void eliminarPaciente(int id);
    PacienteSalidaDto actualizarPaciente(PacienteEntradaDto paciente);
}