import { t, publicProcedure } from "./helpers/createRouter";
import { PrioritiesToSkillsAggregateSchema } from "../schemas/aggregatePrioritiesToSkills.schema";
import { PrioritiesToSkillsCreateManySchema } from "../schemas/createManyPrioritiesToSkills.schema";
import { PrioritiesToSkillsCreateOneSchema } from "../schemas/createOnePrioritiesToSkills.schema";
import { PrioritiesToSkillsDeleteManySchema } from "../schemas/deleteManyPrioritiesToSkills.schema";
import { PrioritiesToSkillsDeleteOneSchema } from "../schemas/deleteOnePrioritiesToSkills.schema";
import { PrioritiesToSkillsFindFirstSchema } from "../schemas/findFirstPrioritiesToSkills.schema";
import { PrioritiesToSkillsFindManySchema } from "../schemas/findManyPrioritiesToSkills.schema";
import { PrioritiesToSkillsFindUniqueSchema } from "../schemas/findUniquePrioritiesToSkills.schema";
import { PrioritiesToSkillsGroupBySchema } from "../schemas/groupByPrioritiesToSkills.schema";
import { PrioritiesToSkillsUpdateManySchema } from "../schemas/updateManyPrioritiesToSkills.schema";
import { PrioritiesToSkillsUpdateOneSchema } from "../schemas/updateOnePrioritiesToSkills.schema";
import { PrioritiesToSkillsUpsertSchema } from "../schemas/upsertOnePrioritiesToSkills.schema";

export const prioritiestoskillsRouter = t.router({
  aggregatePrioritiesToSkills: publicProcedure
    .input(PrioritiesToSkillsAggregateSchema).query(async ({ ctx, input }) => {
      const aggregatePrioritiesToSkills = await ctx.prisma.prioritiesToSkills.aggregate(input);
      return aggregatePrioritiesToSkills;
    }),
  createManyPrioritiesToSkills: publicProcedure
    .input(PrioritiesToSkillsCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyPrioritiesToSkills = await ctx.prisma.prioritiesToSkills.createMany(input);
      return createManyPrioritiesToSkills;
    }),
  createOnePrioritiesToSkills: publicProcedure
    .input(PrioritiesToSkillsCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOnePrioritiesToSkills = await ctx.prisma.prioritiesToSkills.create(input);
      return createOnePrioritiesToSkills;
    }),
  deleteManyPrioritiesToSkills: publicProcedure
    .input(PrioritiesToSkillsDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyPrioritiesToSkills = await ctx.prisma.prioritiesToSkills.deleteMany(input);
      return deleteManyPrioritiesToSkills;
    }),
  deleteOnePrioritiesToSkills: publicProcedure
    .input(PrioritiesToSkillsDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOnePrioritiesToSkills = await ctx.prisma.prioritiesToSkills.delete(input);
      return deleteOnePrioritiesToSkills;
    }),
  findFirstPrioritiesToSkills: publicProcedure
    .input(PrioritiesToSkillsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPrioritiesToSkills = await ctx.prisma.prioritiesToSkills.findFirst(input);
      return findFirstPrioritiesToSkills;
    }),
  findFirstPrioritiesToSkillsOrThrow: publicProcedure
    .input(PrioritiesToSkillsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPrioritiesToSkillsOrThrow = await ctx.prisma.prioritiesToSkills.findFirstOrThrow(input);
      return findFirstPrioritiesToSkillsOrThrow;
    }),
  findManyPrioritiesToSkills: publicProcedure
    .input(PrioritiesToSkillsFindManySchema).query(async ({ ctx, input }) => {
      const findManyPrioritiesToSkills = await ctx.prisma.prioritiesToSkills.findMany(input);
      return findManyPrioritiesToSkills;
    }),
  findUniquePrioritiesToSkills: publicProcedure
    .input(PrioritiesToSkillsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePrioritiesToSkills = await ctx.prisma.prioritiesToSkills.findUnique(input);
      return findUniquePrioritiesToSkills;
    }),
  findUniquePrioritiesToSkillsOrThrow: publicProcedure
    .input(PrioritiesToSkillsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePrioritiesToSkillsOrThrow = await ctx.prisma.prioritiesToSkills.findUniqueOrThrow(input);
      return findUniquePrioritiesToSkillsOrThrow;
    }),
  groupByPrioritiesToSkills: publicProcedure
    .input(PrioritiesToSkillsGroupBySchema).query(async ({ ctx, input }) => {
      const groupByPrioritiesToSkills = await ctx.prisma.prioritiesToSkills.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByPrioritiesToSkills;
    }),
  updateManyPrioritiesToSkills: publicProcedure
    .input(PrioritiesToSkillsUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyPrioritiesToSkills = await ctx.prisma.prioritiesToSkills.updateMany(input);
      return updateManyPrioritiesToSkills;
    }),
  updateOnePrioritiesToSkills: publicProcedure
    .input(PrioritiesToSkillsUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOnePrioritiesToSkills = await ctx.prisma.prioritiesToSkills.update(input);
      return updateOnePrioritiesToSkills;
    }),
  upsertOnePrioritiesToSkills: publicProcedure
    .input(PrioritiesToSkillsUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOnePrioritiesToSkills = await ctx.prisma.prioritiesToSkills.upsert(input);
      return upsertOnePrioritiesToSkills;
    }),

}) 
