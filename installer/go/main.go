package main

import (
	"flag"
	"fmt"
	"os"

	"installer/internal/config"
	"installer/internal/handlers"

)

func main() {
    // Define command-line flags
    configFile := flag.String("config", "config.yaml", "Path to the configuration file")
    command := flag.String("command", "", "Command to execute")

    // Parse the flags
    flag.Parse()

    // Load configuration
    cfg, err := config.LoadConfig(*configFile)
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error loading config: %v\n", err)
        os.Exit(1)
    }

    // Execute the appropriate command
    switch *command {
    case "start":
        handlers.StartHandler(cfg)
    case "stop":
        handlers.StopHandler(cfg)
    case "status":
        fmt.Println("Status command is not implemented yet.")
    default:
        fmt.Println("Unknown command. Available commands: start, stop")
        os.Exit(1)
    }
}