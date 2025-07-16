package com.retiro.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.retiro.model.Client;
import com.retiro.repository.ClientRepository;

@Service
public class ClientService {

    private final ClientRepository repository;

    public ClientService(ClientRepository repository) {
        this.repository = repository;
    }

    public List<Client> findAll() {
        return repository.findAll();
    }

    public Client save(Client cliente) {
        return repository.save(cliente);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    public Client update(Long id, Client cliente) {
        cliente.setId(id);
        return repository.save(cliente);
    }
}
