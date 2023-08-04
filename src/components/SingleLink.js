import classes from './socials.module.css'

export default function SingleLink({ path, image }) {
  return (
    <a href={path}>
      <img rel="icon" src={image} alt='social media' className={classes.github} />
    </a>
  )
}
