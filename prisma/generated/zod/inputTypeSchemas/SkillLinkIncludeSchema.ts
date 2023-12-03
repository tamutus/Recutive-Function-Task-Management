import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillArgsSchema } from "../outputTypeSchemas/SkillArgsSchema"

export const SkillLinkIncludeSchema: z.ZodType<Prisma.SkillLinkInclude> = z.object({
  precursor: z.union([z.boolean(),z.lazy(() => SkillArgsSchema)]).optional(),
  successor: z.union([z.boolean(),z.lazy(() => SkillArgsSchema)]).optional(),
}).strict()

export default SkillLinkIncludeSchema;
