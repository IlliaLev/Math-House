use axum::{routing::get, extract::Path, Router, Json, http::StatusCode, response::IntoResponse};
use serde::{Serialize, Deserialize};
use serde_json;

#[derive(Serialize, Deserialize)]
pub struct Problem {
    problem_type: String,
    id: String,
    content: String,
    condition: String,
    answer: String,
}

pub fn router() -> Router {
    Router::new()
        .route("/{problem_type}/{id}", get(get_problems_by_type_id))
        .route("/", get(get_all_problems))
        .route("/{problem_type}", get(get_problems_by_type))
}

async fn get_all_problems() -> impl IntoResponse {
    let data = std::fs::read_to_string("data/problems.json").expect("Failed to read problems.json");
    let problems: Vec<Problem> = serde_json::from_str(&data).expect("Failed to parse problems.json");
    (StatusCode::OK, Json(problems)).into_response() 
}

async fn get_problems_by_type(Path(problem_type): Path<String>) -> impl IntoResponse {
    let valid_types = ["linear","logarithm","power","radical","absolute","rational","quadratic"];

    if !valid_types.contains(&problem_type.as_str()) {
        return (StatusCode::NOT_FOUND, Json("Incorrect type")).into_response();
    }

    let data = std::fs::read_to_string("data/problems.json").unwrap();
    let problems: Vec<Problem> = serde_json::from_str(&data).unwrap();

    let filtered: Vec<Problem> = problems.into_iter().filter(|p| p.problem_type == problem_type).collect();

    if filtered.is_empty() {
        return (StatusCode::NOT_FOUND, Json("No problems were found")).into_response();
    }

    return (StatusCode::OK, Json(filtered)).into_response();
}

async fn get_problems_by_type_id(Path((problem_type, id)): Path<(String, String)>) -> impl IntoResponse {
    let valid_types = ["linear","logarithm","power","radical","absolute","rational","quadratic"];

    if !valid_types.contains(&problem_type.as_str()) {
        return (StatusCode::NOT_FOUND, Json("Problem was not found. Incorrect type")).into_response();
    }

    let data = std::fs::read_to_string("data/problems.json").unwrap();
    let problems: Vec<Problem> = serde_json::from_str(&data).unwrap();

    match problems.into_iter().find(|p| p.id == id && p.problem_type == problem_type) {
        Some(problem) => {
            return (StatusCode::OK, Json(problem)).into_response();
        },
        None => {
            return (StatusCode::NOT_FOUND, Json("Problem not found")).into_response();
        }
    }
}

/*async fn get_logarithms() -> Json<Problem> {
    Json(Problem {
        name: "logarithms".to_string(),
        content: "log2(x) = 2".to_string(),
        condition: "solve".to_string(),
    })
}

async fn get_linear() -> Json<Problem> {
    
}

async fn get_powers() -> Json<Problem> {
    
}

async fn get_radical() -> Json<Problem> {
    
}

async fn get_absolute() -> Json<Problem> {
    
}

async fn get_rational() -> Json<Problem> {
    
}*/