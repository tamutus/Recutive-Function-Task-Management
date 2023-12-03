import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { PersonUpdateWithoutSkillPathTagsInputSchema } from './PersonUpdateWithoutSkillPathTagsInputSchema';
import { PersonUncheckedUpdateWithoutSkillPathTagsInputSchema } from './PersonUncheckedUpdateWithoutSkillPathTagsInputSchema';

export const PersonUpdateToOneWithWhereWithoutSkillPathTagsInputSchema: z.ZodType<Prisma.PersonUpdateToOneWithWhereWithoutSkillPathTagsInput> = z.object({
  where: z.lazy(() => PersonWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PersonUpdateWithoutSkillPathTagsInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutSkillPathTagsInputSchema) ]),
}).strict();

export default PersonUpdateToOneWithWhereWithoutSkillPathTagsInputSchema;
