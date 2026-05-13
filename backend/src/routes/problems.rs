use axum::{routing::get, extract::Path, Router, Json};
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
    Router::new().route("/{problem_type}/{id}", get(get_problems_by_type_id))
}

async fn get_all_problems() -> Json<Vec<Problem>> {
    let data = std::fs::read_to_string("data/problems.json").expect("Failed to read problems.json");
    let problems = serde_json::from_str(&data).expect("Failed to parse problems.json");
    Json(problems)
}

async fn get_problems_by_type_id(Path((problem_type, id)): Path<(String, String)>) -> Json<Problem> {
    let valid_types = ["linear","logarithm","power","radical","absolute","rational","quadratic"];

    let not_found_problem = Problem {
        problem_type: "Not Found Type".to_string(),
        id: "Not Found".to_string(),
        content: "Not Found".to_string(),
        condition: "Not Found".to_string(),
        answer: "Not Found".to_string(),
    };

    if !valid_types.contains(&problem_type.as_str()) {
        return Json(Problem {
            problem_type: not_found_problem.problem_type,
            id,
            content: not_found_problem.content,
            condition: not_found_problem.condition,
            answer: not_found_problem.answer,
        })
    }

    let data = std::fs::read_to_string("data/problems.json").unwrap();
    let problems: Vec<Problem> = serde_json::from_str(&data).unwrap();

    match problems.into_iter().find(|p| p.id == id && p.problem_type == problem_type) {
        Some(problem) => {
            return Json(problem)
        },
        None => {
            return Json(not_found_problem)
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