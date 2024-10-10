# Endpoints

## 1. Get User

**Description**: Retrieve user details by user ID.

- **URL**: `/users/:id`
- **Method**: `GET`
- **Parameters**:

  - `id` (string, required): The unique identifier of the user.

- **Response**:
  - **Status 200**: User data retrieved successfully.
    ```json
    {
      "status": 200,
      "message": "User data retrieved successfully",
      "data": {
        "id": "string",
        "email": "string",
        "other_fields": "..."
      }
    }
    ```
  - **Status 404**: User not found.
    ```json
    {
      "status": 404,
      "message": "User not found"
    }
    ```

## 2. Update User

**Description**: Update user information by user ID.

- **URL**: `/users/:id`
- **Method**: `PATCH`
- **Parameters**:

  - `id` (string, required): The unique identifier of the user.

- **Request Body**:

  - A JSON object containing the user fields to update (except the `email`
    field, which is ignored):
    ```json
    {
      "field_name": "new_value",
      "another_field": "another_value"
    }
    ```

- **Response**:
  - **Status 200**: User updated successfully.
    ```json
    {
      "status": 200,
      "message": "User updated successfully",
      "data": {
        "id": "string",
        "email": "string",
        "updated_field": "new_value",
        "other_fields": "..."
      }
    }
    ```
  - **Status 404**: User not found.
    ```json
    {
      "status": 404,
      "message": "User not found"
    }
    ```

## 3. Delete User

**Description**: Delete a user by user ID.

- **URL**: `/users/:id`
- **Method**: `DELETE`
- **Parameters**:

  - `id` (string, required): The unique identifier of the user.

- **Response**:
  - **Status 200**: User deleted successfully.
    ```json
    {
      "status": 200,
      "message": "User deleted successfully",
      "data": {
        "id": "string",
        "email": "string",
        "other_fields": "..."
      }
    }
    ```
  - **Status 404**: User not found.
    ```json
    {
      "status": 404,
      "message": "User not found"
    }
    ```

## Notes

- **GET**: Retrieves a user's details based on their ID.
- **PATCH**: Updates user data, except the `email` field, which should be
  handled separately.
- **DELETE**: Deletes the user and associated account data via cascade
  operations.
