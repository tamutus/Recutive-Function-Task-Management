import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonCreateWithoutEnergyTagsInputSchema } from './PersonCreateWithoutEnergyTagsInputSchema';
import { PersonUncheckedCreateWithoutEnergyTagsInputSchema } from './PersonUncheckedCreateWithoutEnergyTagsInputSchema';

export const PersonCreateOrConnectWithoutEnergyTagsInputSchema: z.ZodType<Prisma.PersonCreateOrConnectWithoutEnergyTagsInput> = z.object({
  where: z.lazy(() => PersonWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PersonCreateWithoutEnergyTagsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutEnergyTagsInputSchema) ]),
}).strict();

export default PersonCreateOrConnectWithoutEnergyTagsInputSchema;
