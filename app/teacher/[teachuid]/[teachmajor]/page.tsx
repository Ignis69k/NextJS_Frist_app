export default async function Page({ params }: { params: { teachuid: string, teachmajor: string } }) {
    const { teachuid, teachmajor } = await params;
    return (
        <div>
            <h1>SAU Teacher</h1>
            <hr />
            TEACHER ID : {teachuid}
            <br />
            TEACHERMAJOR : {teachmajor}
            <hr />
            <h1>A H1 Text</h1>
        </div>
    );
}