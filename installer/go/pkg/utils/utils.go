package utils

import (
	"log"
)

// CheckError logs the error message and exits the application if the error is not nil.
func CheckError(err error) {
	if err != nil {
		log.Fatalf("Error: %v", err)
	}
}

// LogInfo logs an informational message to the console.
func LogInfo(message string) {
	log.Println("INFO:", message)
}

// LogError logs an error message to the console.
func LogError(message string) {
	log.Println("ERROR:", message)
}

// StringInSlice checks if a string exists in a slice of strings.
func StringInSlice(str string, slice []string) bool {
	for _, item := range slice {
		if item == str {
			return true
		}
	}
	return false
}