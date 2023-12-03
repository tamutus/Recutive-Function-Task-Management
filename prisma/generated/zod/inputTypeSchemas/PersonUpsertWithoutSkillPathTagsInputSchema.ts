import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonUpdateWithoutSkillPathTagsInputSchema } from './PersonUpdateWithoutSkillPathTagsInputSchema';
import { PersonUncheckedUpdateWithoutSkillPathTagsInputSchema } from './PersonUncheckedUpdateWithoutSkillPathTagsInputSchema';
import { PersonCreateWithoutSkillPathTagsInputSchema } from './PersonCreateWithoutSkillPathTagsInputSchema';
import { PersonUncheckedCreateWithoutSkillPathTagsInputSchema } from './PersonUncheckedCreateWithoutSkillPathTagsInputSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const PersonUpsertWithoutSkillPathTagsInputSchema: z.ZodType<Prisma.PersonUpsertWithoutSkillPathTagsInput> = z.object({
  update: z.union([ z.lazy(() => PersonUpdateWithoutSkillPathTagsInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutSkillPathTagsInputSchema) ]),
  create: z.union([ z.lazy(() => PersonCreateWithoutSkillPathTagsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutSkillPathTagsInputSchema) ]),
  where: z.lazy(() => PersonWhereInputSchema).optional()
}).strict();

export default PersonUpsertWithoutSkillPathTagsInputSchema;
