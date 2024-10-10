# Endpoints

## 1. Get User Bank Accounts

**Description**: Retrieve all bank accounts related to user provided.

- **URL**: `/bank-accounts/user/:userId`
- **Method**: `GET`
- **Parameters**:

  - `userId` (string, required): The unique identifier of the user.

- **Response**:
  - **Status 200**: User bank accounts retrieved successfully.
    ```json
    {
      "status": 200,
      "message": "User bank accounts retrieved successfully",
      "data": [
        {
          "id": "abc123d4efg5hi6j",
          "title": "Main",
          "description": "This is the main account.",
          "iconName": "gear",
          "balance": "79.85",
          "createdAt": "2024-10-03T23:32:08.161Z",
          "updatedAt": "2024-10-03T23:32:07.493Z",
          "userId": "abc123d4efg5hi6j"
        },
        ...
      ]
    }
    ```
  - **Status 404**: No bank accounts found.
    ```json
    {
      "status": 404,
      "message": "No bank accounts found for user with id: abc123d4efg5hi6j"
    }
    ```

## 2. Get Bank Account Details

**Description**: Gets all information given a bank account

- **URL**: `/bank-accounts/:id`
- **Method**: `GET`
- **Parameters**:

  - `id` (string, required): The unique identifier of the bank account.

- **Response**:
  - **Status 200**: Bank account retrieved successfully.
    ```json
    {
      "status": 200,
      "message": "Bank account retrieved successfully",
      "data": {
        "id": "abc123d4efg5hi6j",
        "title": "Main",
        "description": "This is the main account.",
        "iconName": "gear",
        "balance": "79.85",
        "createdAt": "2024-10-03T23:32:08.161Z",
        "updatedAt": "2024-10-03T23:32:07.493Z",
        "userId": "abc123d4efg5hi6j"
      }
    }
    ```
  - **Status 404**: Bank account not found.
    ```json
    {
      "status": 404,
      "message": "No bank accounts found with id: abc123d4efg5hi6j"
    }
    ```

## 3. Update Bank Account

**Description**: Update bank account information by its ID.

- **URL**: `/bank-accounts/:id`
- **Method**: `PATCH`
- **Parameters**:

  - `id` (string, required): The unique identifier of the bank account.

- **Request Body**:

  - A JSON object containing the fields to update:
    ```json
    {
      "field_name": "new_value",
      "another_field": "another_value"
    }
    ```

- **Response**:
  - **Status 200**: Bank account updated successfully.
    ```json
    {
      "status": 200,
      "message": "Bank account updated successfully",
      "data": {
        "id": "abc123d4efg5hi6j",
        "title": "Main",
        "description": "This is the main account.",
        "iconName": "gear",
        "balance": "79.85",
        "createdAt": "2024-10-03T23:32:08.161Z",
        "updatedAt": "2024-10-03T23:32:07.493Z",
        "userId": "abc123d4efg5hi6j"
      }
    }
    ```
  - **Status 404**: Bank account not found.
    ```json
    {
      "status": 404,
      "message": "Bank account not found"
    }
    ```

## 3. Delete Bank Account

**Description**: Delete a bank account and all its related entries.

- **URL**: `/bank-accounts/:id`
- **Method**: `DELETE`
- **Parameters**:

  - `id` (string, required): The unique identifier of the bank account.

- **Response**:

  - **Status 200**: Bank account deleted successfully.

    ```json
    {
      "status": 200,
      "message": "Bank account deleted successfully",
      "data": {
        "id": "abc123d4efg5hi6j",
        "title": "Main",
        "description": "This is the main account.",
        "iconName": "gear",
        "balance": "79.85",
        "createdAt": "2024-10-03T23:32:08.161Z",
        "updatedAt": "2024-10-03T23:32:07.493Z",
        "userId": "abc123d4efg5hi6j"
      }
    }
    ```

  - **Status 404**: Bank account not found.
    ```json
    {
      "status": 404,
      "message": "Bank account not found"
    }
    ```
