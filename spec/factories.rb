FactoryBot.define do

    factory :user do
      email {"joe@gmail.com"}
      password {"123"}
      password_confirmation {"123"}
      firstName {"Oski"}
      lastName {"Bear"}
    end
    
    factory :stoolkit do
      title {"Test Toolkit"}
      author {"123"}
      category {"123"}
      created_at {"Oski"}
      updated_at {"Bear"}
    end

    factory :sstep do
      stoolkit
      content {"Test Steps"}
    end

    factory :toolkit do
      title {"Test Toolkit"}
      author {"123"}
      category {"123"}
      created_at {"Oski"}
      updated_at {"Bear"}
    end
end
