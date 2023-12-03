import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateWithoutSkillTagsInputSchema } from './PersonCreateWithoutSkillTagsInputSchema';
import { PersonUncheckedCreateWithoutSkillTagsInputSchema } from './PersonUncheckedCreateWithoutSkillTagsInputSchema';
import { PersonCreateOrConnectWithoutSkillTagsInputSchema } from './PersonCreateOrConnectWithoutSkillTagsInputSchema';
import { PersonUpsertWithoutSkillTagsInputSchema } from './PersonUpsertWithoutSkillTagsInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonUpdateToOneWithWhereWithoutSkillTagsInputSchema } from './PersonUpdateToOneWithWhereWithoutSkillTagsInputSchema';
import { PersonUpdateWithoutSkillTagsInputSchema } from './PersonUpdateWithoutSkillTagsInputSchema';
import { PersonUncheckedUpdateWithoutSkillTagsInputSchema } from './PersonUncheckedUpdateWithoutSkillTagsInputSchema';

export const PersonUpdateOneRequiredWithoutSkillTagsNestedInputSchema: z.ZodType<Prisma.PersonUpdateOneRequiredWithoutSkillTagsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutSkillTagsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutSkillTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutSkillTagsInputSchema).optional(),
  upsert: z.lazy(() => PersonUpsertWithoutSkillTagsInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PersonUpdateToOneWithWhereWithoutSkillTagsInputSchema),z.lazy(() => PersonUpdateWithoutSkillTagsInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutSkillTagsInputSchema) ]).optional(),
}).strict();

export default PersonUpdateOneRequiredWithoutSkillTagsNestedInputSchema;
