export function seperateFullNameIntoFirstAndLastName(fullname: string): string[] {
    const [first_name, last_name] = fullname.split(" ").map((name) => name.trim());
    return [first_name, last_name];
}
