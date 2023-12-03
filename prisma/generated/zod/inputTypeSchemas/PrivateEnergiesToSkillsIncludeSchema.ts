import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillArgsSchema } from "../outputTypeSchemas/SkillArgsSchema"
import { PrivateEnergyArgsSchema } from "../outputTypeSchemas/PrivateEnergyArgsSchema"

export const PrivateEnergiesToSkillsIncludeSchema: z.ZodType<Prisma.PrivateEnergiesToSkillsInclude> = z.object({
  skill: z.union([z.boolean(),z.lazy(() => SkillArgsSchema)]).optional(),
  energy: z.union([z.boolean(),z.lazy(() => PrivateEnergyArgsSchema)]).optional(),
}).strict()

export default PrivateEnergiesToSkillsIncludeSchema;
