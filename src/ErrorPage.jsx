import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div text-gray-700 text-base>
      <h1 text-4xl font-bold>
        Oh no, this route doesn't exist!
      </h1>
      <Link to='/'>
        You can go back to the home page by clicking here, though!
      </Link>
    </div>
  );
};

export default ErrorPage;
