package main

import (
	"fmt"
	"os"
	"strings"
)

var version = "0.0.1"

func greet(name string) string {
	cleanName := strings.TrimSpace(name)
	if cleanName == "" {
		cleanName = "friend"
	}
	return fmt.Sprintf("hello, %s", cleanName)
}

func printHelp() {
	fmt.Println("something - example Go CLI for a mixed-language moonrepo")
	fmt.Println("")
	fmt.Println("Usage:")
	fmt.Println("  something greet <name>")
	fmt.Println("  something --version")
	fmt.Println("  something --help")
}

func main() {
	if len(os.Args) < 2 {
		printHelp()
		return
	}

	switch os.Args[1] {
	case "--help", "-h", "help":
		printHelp()
	case "--version", "-v", "version":
		fmt.Println(version)
	case "greet":
		if len(os.Args) < 3 {
			fmt.Fprintln(os.Stderr, "missing required name argument")
			os.Exit(1)
		}
		fmt.Println(greet(os.Args[2]))
	default:
		fmt.Fprintf(os.Stderr, "unknown command: %s\n", os.Args[1])
		printHelp()
		os.Exit(1)
	}
}
