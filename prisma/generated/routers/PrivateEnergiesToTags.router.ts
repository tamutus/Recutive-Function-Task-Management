import { t, publicProcedure } from "./helpers/createRouter";
import { PrivateEnergiesToTagsAggregateSchema } from "../schemas/aggregatePrivateEnergiesToTags.schema";
import { PrivateEnergiesToTagsCreateManySchema } from "../schemas/createManyPrivateEnergiesToTags.schema";
import { PrivateEnergiesToTagsCreateOneSchema } from "../schemas/createOnePrivateEnergiesToTags.schema";
import { PrivateEnergiesToTagsDeleteManySchema } from "../schemas/deleteManyPrivateEnergiesToTags.schema";
import { PrivateEnergiesToTagsDeleteOneSchema } from "../schemas/deleteOnePrivateEnergiesToTags.schema";
import { PrivateEnergiesToTagsFindFirstSchema } from "../schemas/findFirstPrivateEnergiesToTags.schema";
import { PrivateEnergiesToTagsFindManySchema } from "../schemas/findManyPrivateEnergiesToTags.schema";
import { PrivateEnergiesToTagsFindUniqueSchema } from "../schemas/findUniquePrivateEnergiesToTags.schema";
import { PrivateEnergiesToTagsGroupBySchema } from "../schemas/groupByPrivateEnergiesToTags.schema";
import { PrivateEnergiesToTagsUpdateManySchema } from "../schemas/updateManyPrivateEnergiesToTags.schema";
import { PrivateEnergiesToTagsUpdateOneSchema } from "../schemas/updateOnePrivateEnergiesToTags.schema";
import { PrivateEnergiesToTagsUpsertSchema } from "../schemas/upsertOnePrivateEnergiesToTags.schema";

export const privateenergiestotagsRouter = t.router({
  aggregatePrivateEnergiesToTags: publicProcedure
    .input(PrivateEnergiesToTagsAggregateSchema).query(async ({ ctx, input }) => {
      const aggregatePrivateEnergiesToTags = await ctx.prisma.privateEnergiesToTags.aggregate(input);
      return aggregatePrivateEnergiesToTags;
    }),
  createManyPrivateEnergiesToTags: publicProcedure
    .input(PrivateEnergiesToTagsCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyPrivateEnergiesToTags = await ctx.prisma.privateEnergiesToTags.createMany(input);
      return createManyPrivateEnergiesToTags;
    }),
  createOnePrivateEnergiesToTags: publicProcedure
    .input(PrivateEnergiesToTagsCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOnePrivateEnergiesToTags = await ctx.prisma.privateEnergiesToTags.create(input);
      return createOnePrivateEnergiesToTags;
    }),
  deleteManyPrivateEnergiesToTags: publicProcedure
    .input(PrivateEnergiesToTagsDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyPrivateEnergiesToTags = await ctx.prisma.privateEnergiesToTags.deleteMany(input);
      return deleteManyPrivateEnergiesToTags;
    }),
  deleteOnePrivateEnergiesToTags: publicProcedure
    .input(PrivateEnergiesToTagsDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOnePrivateEnergiesToTags = await ctx.prisma.privateEnergiesToTags.delete(input);
      return deleteOnePrivateEnergiesToTags;
    }),
  findFirstPrivateEnergiesToTags: publicProcedure
    .input(PrivateEnergiesToTagsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPrivateEnergiesToTags = await ctx.prisma.privateEnergiesToTags.findFirst(input);
      return findFirstPrivateEnergiesToTags;
    }),
  findFirstPrivateEnergiesToTagsOrThrow: publicProcedure
    .input(PrivateEnergiesToTagsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPrivateEnergiesToTagsOrThrow = await ctx.prisma.privateEnergiesToTags.findFirstOrThrow(input);
      return findFirstPrivateEnergiesToTagsOrThrow;
    }),
  findManyPrivateEnergiesToTags: publicProcedure
    .input(PrivateEnergiesToTagsFindManySchema).query(async ({ ctx, input }) => {
      const findManyPrivateEnergiesToTags = await ctx.prisma.privateEnergiesToTags.findMany(input);
      return findManyPrivateEnergiesToTags;
    }),
  findUniquePrivateEnergiesToTags: publicProcedure
    .input(PrivateEnergiesToTagsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePrivateEnergiesToTags = await ctx.prisma.privateEnergiesToTags.findUnique(input);
      return findUniquePrivateEnergiesToTags;
    }),
  findUniquePrivateEnergiesToTagsOrThrow: publicProcedure
    .input(PrivateEnergiesToTagsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePrivateEnergiesToTagsOrThrow = await ctx.prisma.privateEnergiesToTags.findUniqueOrThrow(input);
      return findUniquePrivateEnergiesToTagsOrThrow;
    }),
  groupByPrivateEnergiesToTags: publicProcedure
    .input(PrivateEnergiesToTagsGroupBySchema).query(async ({ ctx, input }) => {
      const groupByPrivateEnergiesToTags = await ctx.prisma.privateEnergiesToTags.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByPrivateEnergiesToTags;
    }),
  updateManyPrivateEnergiesToTags: publicProcedure
    .input(PrivateEnergiesToTagsUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyPrivateEnergiesToTags = await ctx.prisma.privateEnergiesToTags.updateMany(input);
      return updateManyPrivateEnergiesToTags;
    }),
  updateOnePrivateEnergiesToTags: publicProcedure
    .input(PrivateEnergiesToTagsUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOnePrivateEnergiesToTags = await ctx.prisma.privateEnergiesToTags.update(input);
      return updateOnePrivateEnergiesToTags;
    }),
  upsertOnePrivateEnergiesToTags: publicProcedure
    .input(PrivateEnergiesToTagsUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOnePrivateEnergiesToTags = await ctx.prisma.privateEnergiesToTags.upsert(input);
      return upsertOnePrivateEnergiesToTags;
    }),

}) 
