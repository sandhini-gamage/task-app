package com.task.document;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Document(collection = "tasks")
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Getter
@Setter
public class Task {

    @Id
    private String id;
    private String title;
    private String description;
    private String status;
    private LocalDateTime createdAt;

    // public String getId() { return id; }
    // public void setId(String id) { this.id = id; }
    // public String getTitle() { return title; }
    // public void setTitle(String title) { this.title = title; }
    // public String getDescription() { return description; }
    // public void setDescription(String description) { this.description = description; }
    // public String getStatus() { return status; }
    // public void setStatus(String status) { this.status = status; }
    // public LocalDateTime getCreatedAt() { return createdAt; }
    // public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}