import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateWithoutSkillPathTagsInputSchema } from './PersonCreateWithoutSkillPathTagsInputSchema';
import { PersonUncheckedCreateWithoutSkillPathTagsInputSchema } from './PersonUncheckedCreateWithoutSkillPathTagsInputSchema';
import { PersonCreateOrConnectWithoutSkillPathTagsInputSchema } from './PersonCreateOrConnectWithoutSkillPathTagsInputSchema';
import { PersonUpsertWithoutSkillPathTagsInputSchema } from './PersonUpsertWithoutSkillPathTagsInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonUpdateToOneWithWhereWithoutSkillPathTagsInputSchema } from './PersonUpdateToOneWithWhereWithoutSkillPathTagsInputSchema';
import { PersonUpdateWithoutSkillPathTagsInputSchema } from './PersonUpdateWithoutSkillPathTagsInputSchema';
import { PersonUncheckedUpdateWithoutSkillPathTagsInputSchema } from './PersonUncheckedUpdateWithoutSkillPathTagsInputSchema';

export const PersonUpdateOneRequiredWithoutSkillPathTagsNestedInputSchema: z.ZodType<Prisma.PersonUpdateOneRequiredWithoutSkillPathTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutSkillPathTagsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutSkillPathTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutSkillPathTagsInputSchema).optional(),
  upsert: z.lazy(() => PersonUpsertWithoutSkillPathTagsInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PersonUpdateToOneWithWhereWithoutSkillPathTagsInputSchema),z.lazy(() => PersonUpdateWithoutSkillPathTagsInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutSkillPathTagsInputSchema) ]).optional(),
}).strict();

export default PersonUpdateOneRequiredWithoutSkillPathTagsNestedInputSchema;
