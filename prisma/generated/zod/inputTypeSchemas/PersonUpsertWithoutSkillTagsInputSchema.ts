import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonUpdateWithoutSkillTagsInputSchema } from './PersonUpdateWithoutSkillTagsInputSchema';
import { PersonUncheckedUpdateWithoutSkillTagsInputSchema } from './PersonUncheckedUpdateWithoutSkillTagsInputSchema';
import { PersonCreateWithoutSkillTagsInputSchema } from './PersonCreateWithoutSkillTagsInputSchema';
import { PersonUncheckedCreateWithoutSkillTagsInputSchema } from './PersonUncheckedCreateWithoutSkillTagsInputSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const PersonUpsertWithoutSkillTagsInputSchema: z.ZodType<Prisma.PersonUpsertWithoutSkillTagsInput> = z.object({
  update: z.union([ z.lazy(() => PersonUpdateWithoutSkillTagsInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutSkillTagsInputSchema) ]),
  create: z.union([ z.lazy(() => PersonCreateWithoutSkillTagsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutSkillTagsInputSchema) ]),
  where: z.lazy(() => PersonWhereInputSchema).optional()
}).strict();

export default PersonUpsertWithoutSkillTagsInputSchema;
