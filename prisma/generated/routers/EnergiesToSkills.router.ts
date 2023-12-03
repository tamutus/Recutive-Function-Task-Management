import { t, publicProcedure } from "./helpers/createRouter";
import { EnergiesToSkillsAggregateSchema } from "../schemas/aggregateEnergiesToSkills.schema";
import { EnergiesToSkillsCreateManySchema } from "../schemas/createManyEnergiesToSkills.schema";
import { EnergiesToSkillsCreateOneSchema } from "../schemas/createOneEnergiesToSkills.schema";
import { EnergiesToSkillsDeleteManySchema } from "../schemas/deleteManyEnergiesToSkills.schema";
import { EnergiesToSkillsDeleteOneSchema } from "../schemas/deleteOneEnergiesToSkills.schema";
import { EnergiesToSkillsFindFirstSchema } from "../schemas/findFirstEnergiesToSkills.schema";
import { EnergiesToSkillsFindManySchema } from "../schemas/findManyEnergiesToSkills.schema";
import { EnergiesToSkillsFindUniqueSchema } from "../schemas/findUniqueEnergiesToSkills.schema";
import { EnergiesToSkillsGroupBySchema } from "../schemas/groupByEnergiesToSkills.schema";
import { EnergiesToSkillsUpdateManySchema } from "../schemas/updateManyEnergiesToSkills.schema";
import { EnergiesToSkillsUpdateOneSchema } from "../schemas/updateOneEnergiesToSkills.schema";
import { EnergiesToSkillsUpsertSchema } from "../schemas/upsertOneEnergiesToSkills.schema";

export const energiestoskillsRouter = t.router({
  aggregateEnergiesToSkills: publicProcedure
    .input(EnergiesToSkillsAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateEnergiesToSkills = await ctx.prisma.energiesToSkills.aggregate(input);
      return aggregateEnergiesToSkills;
    }),
  createManyEnergiesToSkills: publicProcedure
    .input(EnergiesToSkillsCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyEnergiesToSkills = await ctx.prisma.energiesToSkills.createMany(input);
      return createManyEnergiesToSkills;
    }),
  createOneEnergiesToSkills: publicProcedure
    .input(EnergiesToSkillsCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneEnergiesToSkills = await ctx.prisma.energiesToSkills.create(input);
      return createOneEnergiesToSkills;
    }),
  deleteManyEnergiesToSkills: publicProcedure
    .input(EnergiesToSkillsDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyEnergiesToSkills = await ctx.prisma.energiesToSkills.deleteMany(input);
      return deleteManyEnergiesToSkills;
    }),
  deleteOneEnergiesToSkills: publicProcedure
    .input(EnergiesToSkillsDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneEnergiesToSkills = await ctx.prisma.energiesToSkills.delete(input);
      return deleteOneEnergiesToSkills;
    }),
  findFirstEnergiesToSkills: publicProcedure
    .input(EnergiesToSkillsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstEnergiesToSkills = await ctx.prisma.energiesToSkills.findFirst(input);
      return findFirstEnergiesToSkills;
    }),
  findFirstEnergiesToSkillsOrThrow: publicProcedure
    .input(EnergiesToSkillsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstEnergiesToSkillsOrThrow = await ctx.prisma.energiesToSkills.findFirstOrThrow(input);
      return findFirstEnergiesToSkillsOrThrow;
    }),
  findManyEnergiesToSkills: publicProcedure
    .input(EnergiesToSkillsFindManySchema).query(async ({ ctx, input }) => {
      const findManyEnergiesToSkills = await ctx.prisma.energiesToSkills.findMany(input);
      return findManyEnergiesToSkills;
    }),
  findUniqueEnergiesToSkills: publicProcedure
    .input(EnergiesToSkillsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueEnergiesToSkills = await ctx.prisma.energiesToSkills.findUnique(input);
      return findUniqueEnergiesToSkills;
    }),
  findUniqueEnergiesToSkillsOrThrow: publicProcedure
    .input(EnergiesToSkillsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueEnergiesToSkillsOrThrow = await ctx.prisma.energiesToSkills.findUniqueOrThrow(input);
      return findUniqueEnergiesToSkillsOrThrow;
    }),
  groupByEnergiesToSkills: publicProcedure
    .input(EnergiesToSkillsGroupBySchema).query(async ({ ctx, input }) => {
      const groupByEnergiesToSkills = await ctx.prisma.energiesToSkills.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByEnergiesToSkills;
    }),
  updateManyEnergiesToSkills: publicProcedure
    .input(EnergiesToSkillsUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyEnergiesToSkills = await ctx.prisma.energiesToSkills.updateMany(input);
      return updateManyEnergiesToSkills;
    }),
  updateOneEnergiesToSkills: publicProcedure
    .input(EnergiesToSkillsUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneEnergiesToSkills = await ctx.prisma.energiesToSkills.update(input);
      return updateOneEnergiesToSkills;
    }),
  upsertOneEnergiesToSkills: publicProcedure
    .input(EnergiesToSkillsUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneEnergiesToSkills = await ctx.prisma.energiesToSkills.upsert(input);
      return upsertOneEnergiesToSkills;
    }),

}) 
