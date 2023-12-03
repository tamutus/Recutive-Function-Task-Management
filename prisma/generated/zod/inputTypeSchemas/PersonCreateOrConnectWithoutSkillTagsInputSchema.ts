import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonCreateWithoutSkillTagsInputSchema } from './PersonCreateWithoutSkillTagsInputSchema';
import { PersonUncheckedCreateWithoutSkillTagsInputSchema } from './PersonUncheckedCreateWithoutSkillTagsInputSchema';

export const PersonCreateOrConnectWithoutSkillTagsInputSchema: z.ZodType<Prisma.PersonCreateOrConnectWithoutSkillTagsInput> = z.object({
  where: z.lazy(() => PersonWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PersonCreateWithoutSkillTagsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutSkillTagsInputSchema) ]),
}).strict();

export default PersonCreateOrConnectWithoutSkillTagsInputSchema;
