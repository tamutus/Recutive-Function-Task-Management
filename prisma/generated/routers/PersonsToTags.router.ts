import { t, publicProcedure } from "./helpers/createRouter";
import { PersonsToTagsAggregateSchema } from "../schemas/aggregatePersonsToTags.schema";
import { PersonsToTagsCreateManySchema } from "../schemas/createManyPersonsToTags.schema";
import { PersonsToTagsCreateOneSchema } from "../schemas/createOnePersonsToTags.schema";
import { PersonsToTagsDeleteManySchema } from "../schemas/deleteManyPersonsToTags.schema";
import { PersonsToTagsDeleteOneSchema } from "../schemas/deleteOnePersonsToTags.schema";
import { PersonsToTagsFindFirstSchema } from "../schemas/findFirstPersonsToTags.schema";
import { PersonsToTagsFindManySchema } from "../schemas/findManyPersonsToTags.schema";
import { PersonsToTagsFindUniqueSchema } from "../schemas/findUniquePersonsToTags.schema";
import { PersonsToTagsGroupBySchema } from "../schemas/groupByPersonsToTags.schema";
import { PersonsToTagsUpdateManySchema } from "../schemas/updateManyPersonsToTags.schema";
import { PersonsToTagsUpdateOneSchema } from "../schemas/updateOnePersonsToTags.schema";
import { PersonsToTagsUpsertSchema } from "../schemas/upsertOnePersonsToTags.schema";

export const personstotagsRouter = t.router({
  aggregatePersonsToTags: publicProcedure
    .input(PersonsToTagsAggregateSchema).query(async ({ ctx, input }) => {
      const aggregatePersonsToTags = await ctx.prisma.personsToTags.aggregate(input);
      return aggregatePersonsToTags;
    }),
  createManyPersonsToTags: publicProcedure
    .input(PersonsToTagsCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyPersonsToTags = await ctx.prisma.personsToTags.createMany(input);
      return createManyPersonsToTags;
    }),
  createOnePersonsToTags: publicProcedure
    .input(PersonsToTagsCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOnePersonsToTags = await ctx.prisma.personsToTags.create(input);
      return createOnePersonsToTags;
    }),
  deleteManyPersonsToTags: publicProcedure
    .input(PersonsToTagsDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyPersonsToTags = await ctx.prisma.personsToTags.deleteMany(input);
      return deleteManyPersonsToTags;
    }),
  deleteOnePersonsToTags: publicProcedure
    .input(PersonsToTagsDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOnePersonsToTags = await ctx.prisma.personsToTags.delete(input);
      return deleteOnePersonsToTags;
    }),
  findFirstPersonsToTags: publicProcedure
    .input(PersonsToTagsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPersonsToTags = await ctx.prisma.personsToTags.findFirst(input);
      return findFirstPersonsToTags;
    }),
  findFirstPersonsToTagsOrThrow: publicProcedure
    .input(PersonsToTagsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPersonsToTagsOrThrow = await ctx.prisma.personsToTags.findFirstOrThrow(input);
      return findFirstPersonsToTagsOrThrow;
    }),
  findManyPersonsToTags: publicProcedure
    .input(PersonsToTagsFindManySchema).query(async ({ ctx, input }) => {
      const findManyPersonsToTags = await ctx.prisma.personsToTags.findMany(input);
      return findManyPersonsToTags;
    }),
  findUniquePersonsToTags: publicProcedure
    .input(PersonsToTagsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePersonsToTags = await ctx.prisma.personsToTags.findUnique(input);
      return findUniquePersonsToTags;
    }),
  findUniquePersonsToTagsOrThrow: publicProcedure
    .input(PersonsToTagsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePersonsToTagsOrThrow = await ctx.prisma.personsToTags.findUniqueOrThrow(input);
      return findUniquePersonsToTagsOrThrow;
    }),
  groupByPersonsToTags: publicProcedure
    .input(PersonsToTagsGroupBySchema).query(async ({ ctx, input }) => {
      const groupByPersonsToTags = await ctx.prisma.personsToTags.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByPersonsToTags;
    }),
  updateManyPersonsToTags: publicProcedure
    .input(PersonsToTagsUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyPersonsToTags = await ctx.prisma.personsToTags.updateMany(input);
      return updateManyPersonsToTags;
    }),
  updateOnePersonsToTags: publicProcedure
    .input(PersonsToTagsUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOnePersonsToTags = await ctx.prisma.personsToTags.update(input);
      return updateOnePersonsToTags;
    }),
  upsertOnePersonsToTags: publicProcedure
    .input(PersonsToTagsUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOnePersonsToTags = await ctx.prisma.personsToTags.upsert(input);
      return upsertOnePersonsToTags;
    }),

}) 
