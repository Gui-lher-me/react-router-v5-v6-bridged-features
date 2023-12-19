# React Router v6 Hooks/Components for v5 Apps

A package providing React hooks/components from React Router v6 that can be seamlessly used in React applications running on React Router v5. Enable your v5 applications to leverage the power of v6 hooks without the need for a complete upgrade.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [useNavigate](#usenavigate)
  - [Navigate Component](#navigate-component)
  - [useSearchParams](#usesearchparams)
- [Contributing](#contributing)
- [License](#license)

## Installation

```bash
npm install react-router-v5-v6-bridged-features
```

## Usage

### useNavigate

The `useNavigate` hook provides a convenient way to navigate within your React application using React Router v6 hooks while maintaining compatibility with v5.

```javascript
import { useNavigate } from "react-router-v5-v6-bridged-features";

const ExampleComponent = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate to a specific route
    navigate("/dashboard");
  };

  return <button onClick={handleButtonClick}>Go to Dashboard</button>;
};
```

### Navigate Component

The `Navigate` component is a component-based version of the useNavigate hook.

```javascript
import { Navigate } from "react-router-v5-v6-bridged-features";

const ExampleComponent = () => {
  return <Navigate to="/dashboard" replace />;
};
```

### useSearchParams

The `useSearchParams` hook provides an easy way to manage and update URL search parameters, supporting v6 hooks in v5 applications.

```javascript
import { useSearchParams } from "react-router-v5-v6-bridged-features";

const ExampleComponent = () => {
  const { searchParams, setSearchParams } = useSearchParams();

  const handleInputChange = event => {
    setSearchParams(prevSearchParams => {
      // Perform transformations on the search parameters
      prevSearchParams.set("query", event.target.value);
      return prevSearchParams;
    });
  };

  return (
    <input
      type="text"
      value={searchParams.get("query")}
      onChange={handleInputChange}
    />
  );
};
```

## Contributing

We welcome contributions! If you find any issues or have suggestions for improvement, please open an issue or create a pull request.

## License

This project is licensed under the [MIT License](LICENSE.md).
