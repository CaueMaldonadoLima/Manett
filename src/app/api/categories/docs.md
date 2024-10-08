# Endpoints

## 1. Get User Categories

**Description**: Retrieve user details by user ID.

- **URL**: `/categories/user/:userId`
- **Method**: `GET`
- **Parameters**:

  - `userId` (string, required): The unique identifier of the user.

- **Response**:
  - **Status 200**: User categories retrieved successfully.
    ```json
    {
      "status": 200,
      "message": "User categories retrieved successfully",
      "data": [
        {
          "id": "abc123d4efg5hi6j",
          "title": "Cool Category",
          "description": "A very cool category",
          "iconName": "gear",
          "createdAt": "2024-10-03T23:31:22.230Z",
          "updatedAt": "2024-10-03T23:31:21.584Z",
          "userId": "abc123d4efg5hi6j",
          "parentCategoryId": null
        },
        ...
      ]
    }
    ```
  - **Status 404**: No categories found.
    ```json
    {
      "status": 404,
      "message": "No categories found for user with id: abc123d4efg5hi6j"
    }
    ```

## 2. Get Category Details

**Description**: Gets all information given a category

- **URL**: `/categories/:id`
- **Method**: `GET`
- **Parameters**:

  - `id` (string, required): The unique identifier of the category.

- **Response**:
  - **Status 200**: Category retrieved successfully.
    ```json
    {
      "status": 200,
      "message": "Category retrieved successfully",
      "data": {
        "id": "abc123d4efg5hi6j",
        "title": "Cool Category",
        "description": "A very cool category",
        "iconName": "gear",
        "createdAt": "2024-10-03T23:31:22.230Z",
        "updatedAt": "2024-10-03T23:31:21.584Z",
        "userId": "abc123d4efg5hi6j",
        "parentCategoryId": null
      }
    }
    ```
  - **Status 404**: Category not found.
    ```json
    {
      "status": 404,
      "message": "No categories found with id: abc123d4efg5hi6j"
    }
    ```
- **TODO**:
  - Return all (or last x) entries from a given category

## 3. Update Category

**Description**: Update category information by its ID.

- **URL**: `/categories/:id`
- **Method**: `PATCH`
- **Parameters**:

  - `id` (string, required): The unique identifier of the category.

- **Request Body**:

  - A JSON object containing the fields to update:
    ```json
    {
      "field_name": "new_value",
      "another_field": "another_value"
    }
    ```

- **Response**:
  - **Status 200**: Category updated successfully.
    ```json
    {
      "status": 200,
      "message": "Category updated successfully",
      "data": {
        "id": "abc123d4efg5hi6j",
        "title": "Cool Category",
        "description": "A very cool category",
        "iconName": "gear",
        "createdAt": "2024-10-03T23:31:22.230Z",
        "updatedAt": "2024-10-03T23:31:21.584Z",
        "userId": "abc123d4efg5hi6j",
        "parentCategoryId": null
      }
    }
    ```
  - **Status 404**: Category not found.
    ```json
    {
      "status": 404,
      "message": "Category not found"
    }
    ```

## 3. Delete Category

**Description**: Delete a category and all its related entries.

- **URL**: `/categories/:id`
- **Method**: `DELETE`
- **Parameters**:

  - `id` (string, required): The unique identifier of the category.

- **Response**:
  - **Status 200**: Category deleted successfully.
    ```json
    {
      "status": 200,
      "message": "Category deleted successfully",
      "data": {
        "id": "abc123d4efg5hi6j",
        "title": "Cool Category",
        "description": "A very cool category",
        "iconName": "gear",
        "createdAt": "2024-10-03T23:31:22.230Z",
        "updatedAt": "2024-10-03T23:31:21.584Z",
        "userId": "abc123d4efg5hi6j",
        "parentCategoryId": null
      }
    }
    ```
  - **Status 404**: Category not found.
    ```json
    {
      "status": 404,
      "message": "Category not found"
    }
    ```

## Notes

- **GET**: should return all of the entries related to the category we retrieved
