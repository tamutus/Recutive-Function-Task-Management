import { t, publicProcedure } from "./helpers/createRouter";
import { PersonsToSkillsAggregateSchema } from "../schemas/aggregatePersonsToSkills.schema";
import { PersonsToSkillsCreateManySchema } from "../schemas/createManyPersonsToSkills.schema";
import { PersonsToSkillsCreateOneSchema } from "../schemas/createOnePersonsToSkills.schema";
import { PersonsToSkillsDeleteManySchema } from "../schemas/deleteManyPersonsToSkills.schema";
import { PersonsToSkillsDeleteOneSchema } from "../schemas/deleteOnePersonsToSkills.schema";
import { PersonsToSkillsFindFirstSchema } from "../schemas/findFirstPersonsToSkills.schema";
import { PersonsToSkillsFindManySchema } from "../schemas/findManyPersonsToSkills.schema";
import { PersonsToSkillsFindUniqueSchema } from "../schemas/findUniquePersonsToSkills.schema";
import { PersonsToSkillsGroupBySchema } from "../schemas/groupByPersonsToSkills.schema";
import { PersonsToSkillsUpdateManySchema } from "../schemas/updateManyPersonsToSkills.schema";
import { PersonsToSkillsUpdateOneSchema } from "../schemas/updateOnePersonsToSkills.schema";
import { PersonsToSkillsUpsertSchema } from "../schemas/upsertOnePersonsToSkills.schema";

export const personstoskillsRouter = t.router({
  aggregatePersonsToSkills: publicProcedure
    .input(PersonsToSkillsAggregateSchema).query(async ({ ctx, input }) => {
      const aggregatePersonsToSkills = await ctx.prisma.personsToSkills.aggregate(input);
      return aggregatePersonsToSkills;
    }),
  createManyPersonsToSkills: publicProcedure
    .input(PersonsToSkillsCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyPersonsToSkills = await ctx.prisma.personsToSkills.createMany(input);
      return createManyPersonsToSkills;
    }),
  createOnePersonsToSkills: publicProcedure
    .input(PersonsToSkillsCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOnePersonsToSkills = await ctx.prisma.personsToSkills.create(input);
      return createOnePersonsToSkills;
    }),
  deleteManyPersonsToSkills: publicProcedure
    .input(PersonsToSkillsDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyPersonsToSkills = await ctx.prisma.personsToSkills.deleteMany(input);
      return deleteManyPersonsToSkills;
    }),
  deleteOnePersonsToSkills: publicProcedure
    .input(PersonsToSkillsDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOnePersonsToSkills = await ctx.prisma.personsToSkills.delete(input);
      return deleteOnePersonsToSkills;
    }),
  findFirstPersonsToSkills: publicProcedure
    .input(PersonsToSkillsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPersonsToSkills = await ctx.prisma.personsToSkills.findFirst(input);
      return findFirstPersonsToSkills;
    }),
  findFirstPersonsToSkillsOrThrow: publicProcedure
    .input(PersonsToSkillsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPersonsToSkillsOrThrow = await ctx.prisma.personsToSkills.findFirstOrThrow(input);
      return findFirstPersonsToSkillsOrThrow;
    }),
  findManyPersonsToSkills: publicProcedure
    .input(PersonsToSkillsFindManySchema).query(async ({ ctx, input }) => {
      const findManyPersonsToSkills = await ctx.prisma.personsToSkills.findMany(input);
      return findManyPersonsToSkills;
    }),
  findUniquePersonsToSkills: publicProcedure
    .input(PersonsToSkillsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePersonsToSkills = await ctx.prisma.personsToSkills.findUnique(input);
      return findUniquePersonsToSkills;
    }),
  findUniquePersonsToSkillsOrThrow: publicProcedure
    .input(PersonsToSkillsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePersonsToSkillsOrThrow = await ctx.prisma.personsToSkills.findUniqueOrThrow(input);
      return findUniquePersonsToSkillsOrThrow;
    }),
  groupByPersonsToSkills: publicProcedure
    .input(PersonsToSkillsGroupBySchema).query(async ({ ctx, input }) => {
      const groupByPersonsToSkills = await ctx.prisma.personsToSkills.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByPersonsToSkills;
    }),
  updateManyPersonsToSkills: publicProcedure
    .input(PersonsToSkillsUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyPersonsToSkills = await ctx.prisma.personsToSkills.updateMany(input);
      return updateManyPersonsToSkills;
    }),
  updateOnePersonsToSkills: publicProcedure
    .input(PersonsToSkillsUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOnePersonsToSkills = await ctx.prisma.personsToSkills.update(input);
      return updateOnePersonsToSkills;
    }),
  upsertOnePersonsToSkills: publicProcedure
    .input(PersonsToSkillsUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOnePersonsToSkills = await ctx.prisma.personsToSkills.upsert(input);
      return upsertOnePersonsToSkills;
    }),

}) 
