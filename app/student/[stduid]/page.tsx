export default async function Page({ params }: { params: { stduid: string } }) {
    const { stduid } = await params;
    return (
        <div>
            <h1>SAU Student</h1>
            <hr />
            STUDENT ID : {stduid}
            <hr />
            <h1>A H1 Text</h1>
        </div>
    );
}