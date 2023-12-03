import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema } from './PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema';
import { PrivateEnergiesToTaskTemplatesUpdateWithoutTaskInputSchema } from './PrivateEnergiesToTaskTemplatesUpdateWithoutTaskInputSchema';
import { PrivateEnergiesToTaskTemplatesUncheckedUpdateWithoutTaskInputSchema } from './PrivateEnergiesToTaskTemplatesUncheckedUpdateWithoutTaskInputSchema';

export const PrivateEnergiesToTaskTemplatesUpdateWithWhereUniqueWithoutTaskInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskTemplatesUpdateWithWhereUniqueWithoutTaskInput> = z.object({
  where: z.lazy(() => PrivateEnergiesToTaskTemplatesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PrivateEnergiesToTaskTemplatesUpdateWithoutTaskInputSchema),z.lazy(() => PrivateEnergiesToTaskTemplatesUncheckedUpdateWithoutTaskInputSchema) ]),
}).strict();

export default PrivateEnergiesToTaskTemplatesUpdateWithWhereUniqueWithoutTaskInputSchema;
