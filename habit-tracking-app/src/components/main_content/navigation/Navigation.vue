<script setup>
import AddHabit from '../navigation/navigation_components/AddHabit.vue';
import AddCategory from '../navigation/navigation_components/AddCategory.vue';
import DeleteCategory from '../navigation/navigation_components/DeleteCategory.vue';
</script>

<template>
  <section id="navigation">
    <div class="navigation">
      <ul
        class="nav nav-tabs flex-column flex-sm-row"
        id="myTab"
        role="tablist"
      >
        <li class="nav-item">
          <a
            class="nav-link active"
            id="home-tab"
            data-toggle="tab"
            href="#home"
            role="tab"
            aria-controls="home"
            aria-selected="true"
            >Home</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="add-habit-tab"
            data-toggle="tab"
            href="#add-habit"
            role="tab"
            aria-controls="add-habit"
            aria-selected="false"
          >
            <img
              src="../../../assets/navigation-icons/add.svg"
              alt="add-icon"
            />
            ADD HABIT
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="add-category-tab"
            data-toggle="tab"
            href="#add-category"
            role="tab"
            aria-controls="add-category"
            aria-selected="false"
          >
            <img
              src="../../../assets/navigation-icons/category.svg"
              alt="category-icon"
            />
            ADD CATEGORY
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="delete-category-tab"
            data-toggle="tab"
            href="#delete-category"
            role="tab"
            aria-controls="delete-category"
            aria-selected="false"
          >
            <img
              src="../../../assets/navigation-icons/delete.svg"
              alt="delete-icon"
            />
            DELETE CATEGORY
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="help-category-tab"
            data-toggle="tab"
            href="#help-category"
            role="tab"
            aria-controls="help-category"
            aria-selected="false"
          >
            Help
          </a>
        </li>
      </ul>

      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <div id="icon-message">
            <span class="navbar-text">
              <img
                src="../../../assets/bar-chart.png"
                width="100"
                height="100"
                alt="bar-chart"
                id="icon-img"
              />Reach your goals with DAILY INPRO!
            </span>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="add-habit"
          role="tabpanel"
          aria-labelledby="add-habit-tab"
        >
          <AddHabit />
        </div>
        <div
          class="tab-pane fade"
          id="add-category"
          role="tabpanel"
          aria-labelledby="add-category-tab"
        >
          <AddCategory />
        </div>
        <div
          class="tab-pane fade"
          id="delete-category"
          role="tabpanel"
          aria-labelledby="delete-category-tab"
        >
          <DeleteCategory />
        </div>
        <div
          class="tab-pane fade"
          id="help-category"
          role="tabpanel"
          aria-labelledby="help-category-tab"
        >
          <h3>Welcome to our Habit Tracking application!</h3>
          <h5>
            With this tool, you can easily establish and monitor your daily
            habits.
          </h5>
          <p>
            Start by adding your custom habits and organizing them into
            categories that suit your lifestyle. You even have the flexibility
            to delete categories when needed.
          </p>
          <p>
            To stay on top of your progress, navigate seamlessly between the
            days of the current week. Simply click on a day to view and mark
            your habits as completed. However, please note that habits displayed
            in future days cannot be marked or unmarked to maintain the
            integrity of your habit tracking.
          </p>
          <p>Good luck and thank you for choosing DAILY INPRO!</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.navigation {
  padding: 10px;
}

/* Tab links */
.nav-link {
  color: black;
}

.nav-link:hover {
  color: black;
}

#add-habit-tab:hover {
  background-color: rgba(0, 128, 0, 20.1%);
}

#add-category-tab:hover {
  background-color: rgba(255, 166, 0, 18.7%);
}

#delete-category-tab:hover {
  background-color: rgba(255, 0, 0, 24%);
}

#help-category {
  padding: 10px;
}
</style>
