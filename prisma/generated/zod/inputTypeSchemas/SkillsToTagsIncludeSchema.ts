import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SkillArgsSchema } from "../outputTypeSchemas/SkillArgsSchema"
import { TagArgsSchema } from "../outputTypeSchemas/TagArgsSchema"
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"

export const SkillsToTagsIncludeSchema: z.ZodType<Prisma.SkillsToTagsInclude> = z.object({
  skill: z.union([z.boolean(),z.lazy(() => SkillArgsSchema)]).optional(),
  tag: z.union([z.boolean(),z.lazy(() => TagArgsSchema)]).optional(),
  tagger: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
}).strict()

export default SkillsToTagsIncludeSchema;
