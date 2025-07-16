package com.retiro.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.retiro.model.Client;

public interface ClientRepository extends JpaRepository<Client, Long> {
}
