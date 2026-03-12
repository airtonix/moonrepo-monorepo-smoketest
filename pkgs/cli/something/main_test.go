package main

import "testing"

func TestGreet(t *testing.T) {
	tests := []struct {
		name string
		in   string
		want string
	}{
		{name: "normal", in: "world", want: "hello, world"},
		{name: "trim spaces", in: "  world  ", want: "hello, world"},
		{name: "empty becomes friend", in: "   ", want: "hello, friend"},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			got := greet(tt.in)
			if got != tt.want {
				t.Fatalf("greet() = %q, want %q", got, tt.want)
			}
		})
	}
}
