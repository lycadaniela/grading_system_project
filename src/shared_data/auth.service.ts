import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private localStorageKey = 'userCredentials';

  getUsers(): User[] {
    const storedUsers = localStorage.getItem(this.localStorageKey);
    return storedUsers ? JSON.parse(storedUsers) : [];
  }

  saveUsers(users: User[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(users));
  }

  register(user: User): Observable<boolean> {
    const existingUsers: User[] = this.getUsers();

    // Check if the username is already taken
    const isUsernameTaken = existingUsers.some((existingUser) => existingUser.username === user.username);

    if (isUsernameTaken) {
      return of(false); // Username already taken, registration failed
    }

    // Add the new user to the array with userType
    existingUsers.push(user);

    // Store the updated array back in local storage
    this.saveUsers(existingUsers);

    return of(true); // Registration successful
  }

  login(user: User): Observable<boolean> {
    const existingUsers: User[] = this.getUsers();

    // Check if the provided credentials match any of the stored users
    const matchingUser = existingUsers.find(
      (storedUser) =>
        user.username === storedUser.username &&
        user.password === storedUser.password &&
        user.userType === storedUser.userType
    );

    if (matchingUser) {
      // Return true if a matching user is found
      return of(true);
    }

    return of(false); // Return false if no matching user is found
  }
}
