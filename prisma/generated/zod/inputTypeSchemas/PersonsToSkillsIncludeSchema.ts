import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"
import { SkillArgsSchema } from "../outputTypeSchemas/SkillArgsSchema"

export const PersonsToSkillsIncludeSchema: z.ZodType<Prisma.PersonsToSkillsInclude> = z.object({
  person: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
  skill: z.union([z.boolean(),z.lazy(() => SkillArgsSchema)]).optional(),
}).strict()

export default PersonsToSkillsIncludeSchema;
