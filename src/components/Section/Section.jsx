import PropTypes from 'prop-types';
import s from '../Section/Section.module.css';

export const Section = ({ title, children }) => (
  <section className={s.feedback}>
    <h2 className={s.feedback__title}> {title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
