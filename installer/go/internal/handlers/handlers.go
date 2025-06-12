package handlers

import (
    "fmt"
    "os"

    "installer/internal/config"
)

// ExecuteCommand handles the execution of a command based on user input.
func ExecuteCommand(command string) {
    switch command {
    case "hello":
        HelloCommand()
    default:
        fmt.Println("Unknown command:", command)
        os.Exit(1)
    }
}

// HelloCommand is a simple command that prints a greeting.
func HelloCommand() {
    fmt.Println("Hello, welcome to MY OWN Go CLI application!")
}



func StartHandler(cfg *config.Config) {
    fmt.Println("Starting service...")
    // Add your start logic here
}

func StopHandler(cfg *config.Config) {
    fmt.Println("Stopping service...")
    // Add your stop logic here
}