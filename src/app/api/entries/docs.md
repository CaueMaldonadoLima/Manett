# Endpoints

## 1. Get User Entries

**Description**: Retrieve all entries related to an user.

- **URL**: `/entries/user/:userId`
- **Method**: `GET`
- **Parameters**:

  - `userId` (string, required): The unique identifier of the user.

- **Response**:
  - **Status 200**: User entries retrieved successfully.
    ```json
    {
      "status": 200,
      "message": "User entries retrieved successfully",
      "data": [
        {
          "id": "abc123d4efg5hi6j",
          "title": "entry",
          "description": "a cool entry",
          "value": "19.99",
          "type": "expense",
          "date": "2024-10-03T23:37:21.539Z",
          "createdAt": "2024-10-03T23:37:21.539Z",
          "updatedAt": "2024-10-03T23:37:20.447Z",
          "userId": "abc123d4efg5hi6j",
          "categoryId": "abc123d4efg5hi6j",
          "bankAccountId": "abc123d4efg5hi6j"
        },
        ...
      ]
    }
    ```
  - **Status 404**: No entries found.
    ```json
    {
      "status": 404,
      "message": "No entries found for user with id: abc123d4efg5hi6j"
    }
    ```

## 2. Get Entry Details

**Description**: Gets all information given an entry id.

- **URL**: `/entries/:id`
- **Method**: `GET`
- **Parameters**:

  - `id` (string, required): The unique identifier of the entry.

- **Response**:
  - **Status 200**: Entry retrieved successfully.
    ```json
    {
      "status": 200,
      "message": "Entry retrieved successfully",
      "data": {
        "id": "abc123d4efg5hi6j",
        "title": "entry",
        "description": "a cool entry",
        "value": "19.99",
        "type": "expense",
        "date": "2024-10-03T23:37:21.539Z",
        "createdAt": "2024-10-03T23:37:21.539Z",
        "updatedAt": "2024-10-03T23:37:20.447Z",
        "userId": "abc123d4efg5hi6j",
        "categoryId": "abc123d4efg5hi6j",
        "bankAccountId": "abc123d4efg5hi6j"
      }
    }
    ```
  - **Status 404**: Entry not found.
    ```json
    {
      "status": 404,
      "message": "No entries found with id: abc123d4efg5hi6j"
    }
    ```

## 3. Update Entry

**Description**: Update entry information by its ID.

- **URL**: `/entries/:id`
- **Method**: `PATCH`
- **Parameters**:

  - `id` (string, required): The unique identifier of the entry.

- **Request Body**:

  - A JSON object containing the fields to update:
    ```json
    {
      "field_name": "new_value",
      "another_field": "another_value"
    }
    ```

- **Response**:
  - **Status 200**: Entry updated successfully.
    ```json
    {
      "status": 200,
      "message": "Entry updated successfully",
      "data": {
        "id": "abc123d4efg5hi6j",
        "title": "entry",
        "description": "a cool entry",
        "value": "19.99",
        "type": "expense",
        "date": "2024-10-03T23:37:21.539Z",
        "createdAt": "2024-10-03T23:37:21.539Z",
        "updatedAt": "2024-10-03T23:37:20.447Z",
        "userId": "abc123d4efg5hi6j",
        "categoryId": "abc123d4efg5hi6j",
        "bankAccountId": "abc123d4efg5hi6j"
      }
    }
    ```
  - **Status 404**: Entry not found.
    ```json
    {
      "status": 404,
      "message": "Entry not found"
    }
    ```

## 3. Delete Entry

**Description**: Delete an entry.

- **URL**: `/entries/:id`
- **Method**: `DELETE`
- **Parameters**:

  - `id` (string, required): The unique identifier of the entry.

- **Response**:
  - **Status 200**: Entry deleted successfully.
    ```json
    {
      "status": 200,
      "message": "Entry deleted successfully",
      "data": {
        "id": "abc123d4efg5hi6j",
        "title": "entry",
        "description": "a cool entry",
        "value": "19.99",
        "type": "expense",
        "date": "2024-10-03T23:37:21.539Z",
        "createdAt": "2024-10-03T23:37:21.539Z",
        "updatedAt": "2024-10-03T23:37:20.447Z",
        "userId": "abc123d4efg5hi6j",
        "categoryId": "abc123d4efg5hi6j",
        "bankAccountId": "abc123d4efg5hi6j"
      }
    }
    ```
  - **Status 404**: Entry not found.
    ```json
    {
      "status": 404,
      "message": "Entry not found"
    }
    ```
