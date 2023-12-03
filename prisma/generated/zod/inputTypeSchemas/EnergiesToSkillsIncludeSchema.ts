import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillArgsSchema } from "../outputTypeSchemas/SkillArgsSchema"
import { EnergyArgsSchema } from "../outputTypeSchemas/EnergyArgsSchema"

export const EnergiesToSkillsIncludeSchema: z.ZodType<Prisma.EnergiesToSkillsInclude> = z.object({
  skill: z.union([z.boolean(),z.lazy(() => SkillArgsSchema)]).optional(),
  energy: z.union([z.boolean(),z.lazy(() => EnergyArgsSchema)]).optional(),
}).strict()

export default EnergiesToSkillsIncludeSchema;
