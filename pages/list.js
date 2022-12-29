const listPage = ({list}) => {
    if(!list) return <p>no list found</p>
  return (
    <ul>
        {list.map(user=>(
            <li key={user}>
                {JSON.stringify(user)}
            </li>
        ))}
    </ul>
  )
};

export default listPage;

export async function getServerSideProps() {
  try {
    const response = await fetch("http://localhost:3000/api/");
    const list = await response.json();
    return {
      props: {list}
    };
  } catch (error) {
    console.log("error => ", error);
    return {
      notFound: true,
    };
  }
}
