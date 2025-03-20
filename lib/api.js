export async function fetchProfiles() {
    try {
        const response = await fetch('http://localhost:3000/profiles');
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export async function fetchGroups() {
    try {
        const response = await fetch('http://localhost:3000/groups');
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export async function addProfile(newProfile, password) {
    try {
        console.log('Adding profile:', newProfile); // デバッグ用ログ

        const response = await fetch('http://localhost:3000/profiles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...newProfile, password })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Profile added successfully:', data); // デバッグ用ログ
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export async function createGroup(newGroup, password) {
    try {
        const response = await fetch('http://localhost:3000/groups', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...newGroup, password })
        });
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export async function deleteProfile(profile_id, group_id, password) {
    console.log(password);
    try {
        const response = await fetch(`http://localhost:3000/profiles/delete/${profile_id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                profile_id: profile_id,
                group_id: group_id,
                password: password
            })
        });

        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export async function updateGroup(group, password) {
    try {
        const response = await fetch(`http://localhost:3000/groups/${group.id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...group, password })
        });
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export async function fetchInitialize() {
    try {
        const response = await fetch('http://localhost:3000/initialize');
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

// app.post('/profiles_update', (req, res) => {
//     const { id, name, bio, group_id, status } = req.body;
//     console.log({ name, bio, group_id, status }); // 修正
//     db.prepare('UPDATE profiles SET name = ?, bio = ?, group_id = ?, status = ? WHERE id = ?').run(name, bio, group_id, status, id);
//     res.json({ message: 'Profile updated' });
//   });
export async function updateProfile(profile_id, profile, password) {
    // profileにprofile_idを追加
    profile.id = profile_id;
    try {
        const response = await fetch('http://localhost:3000/profiles_update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                profile: profile,
                password: password
            })

        });
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export async function test() {
    try {
        const response = await fetch('http://localhost:3000/test', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify(profile)
        });
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}