import PropTypes from 'prop-types';

export default function ErrorLabel({ error }) {
    return (
        <div className="text-red-600">
            {Array.isArray(error) 
                ? error.map((err, index) => <p key={index}>{err}</p>) 
                : error}
        </div>
    );
}

ErrorLabel.propTypes = {
    error: PropTypes.oneOfType([
        PropTypes.string,  // Permitir strings
        PropTypes.arrayOf(PropTypes.string)  // Permitir arrays de strings
    ]).isRequired
};

