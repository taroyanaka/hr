// プロフィールのバリデーション関数
function validateProfile(name, bio, group, id = null) {
    // idがある場合は1以上の整数である必要がある
    if (id && (!Number.isInteger(id) || id < 1)) {
        console.log('Validation failed: ID is invalid');
        return false;
    }

    console.log('Validating profile:', { name, bio, group });

    if (!name || !bio || !group) {
        console.log(name, bio, group);
        console.log('Validation failed: Name, bio, and group are required');
        return false;
    }
    if (name.length < 1 || name.length > 100) {
        console.log('Validation failed: Name length is invalid');
        return false;
    }
    if (bio.length < 1 || bio.length > 100) {
        console.log('Validation failed: Bio length is invalid');
        return false;
    }
    if (group.length === 0) {
        console.log('Validation failed: Group length is invalid');
        return false;
    }
    console.log('Validation passed');
    return true;
}

// グループのバリデーション関数
function validateGroup(name, detail, email, existingGroups = []) {
    const errors = [];
    if (!(name.length >= 1 && name.length <= 50)) {
        errors.push('グループ名は1文字以上50文字以下である必要があります。');
    }
    if (existingGroups && existingGroups.includes(name)) {
        errors.push('同じグループ名が既に存在します。');
    }
    if (!(detail.length >= 1 && detail.length <= 50)) {
        errors.push('住所は1文字以上50文字以下である必要があります。');
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errors.push('有効なメールアドレスを入力してください。');
    }
    return errors.length === 0 ? true : errors;
}