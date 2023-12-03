import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"
import { SkillArgsSchema } from "../outputTypeSchemas/SkillArgsSchema"

export const PersonsToSkillsSelectSchema: z.ZodType<Prisma.PersonsToSkillsSelect> = z.object({
  personId: z.boolean().optional(),
  skillId: z.boolean().optional(),
  person: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
  skill: z.union([z.boolean(),z.lazy(() => SkillArgsSchema)]).optional(),
}).strict()

export default PersonsToSkillsSelectSchema;
