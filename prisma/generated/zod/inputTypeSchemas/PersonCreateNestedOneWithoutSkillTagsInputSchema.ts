import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateWithoutSkillTagsInputSchema } from './PersonCreateWithoutSkillTagsInputSchema';
import { PersonUncheckedCreateWithoutSkillTagsInputSchema } from './PersonUncheckedCreateWithoutSkillTagsInputSchema';
import { PersonCreateOrConnectWithoutSkillTagsInputSchema } from './PersonCreateOrConnectWithoutSkillTagsInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';

export const PersonCreateNestedOneWithoutSkillTagsInputSchema: z.ZodType<Prisma.PersonCreateNestedOneWithoutSkillTagsInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutSkillTagsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutSkillTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutSkillTagsInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional()
}).strict();

export default PersonCreateNestedOneWithoutSkillTagsInputSchema;
