package config

import (
    "encoding/json"
    "os"
)

type Config struct {
    AppName string `json:"app_name"`
    Version string `json:"version"`
    Port    int    `json:"port"`
}

// LoadConfig loads the configuration from a JSON file.
func LoadConfig(filePath string) (*Config, error) {
    file, err := os.Open(filePath)
    if err != nil {
        return nil, err
    }
    defer file.Close()

    config := &Config{}
    decoder := json.NewDecoder(file)
    if err := decoder.Decode(config); err != nil {
        return nil, err
    }

    return config, nil
}